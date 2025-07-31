<?php
// 设置响应头，确保返回 JSON 格式
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); // 允许所有域名访问

// 定义数据存储文件路径
$dataFile = 'data_store.json';
$delDataFile = 'del_data_store.json';

// 创建一个数据存储函数
function loadData($file) {
    if (file_exists($file)) {
        $jsonData = file_get_contents($file);
        return json_decode($jsonData, true) ?? [];
    }
    return [];
}

function saveData($data, $file) {
    // 将数据编码为 JSON 字符串并保存
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
}

// 加载现有数据
$dataStore = loadData($dataFile);

// 处理 POST 请求
if ($_SERVER['REQUEST_METHOD'] === 'POST' && strpos($_SERVER['REQUEST_URI'], '/parseNotice') !== false) {
    // 获取请求体数据
    $body = file_get_contents('php://input');
    
    // 输出请求体
    error_log("Received POST body: " . $body); // 将请求体写入错误日志

    // 解析 body 数据
    parse_str($body, $parsedData);

    // 提取 content
    $content = isset($parsedData['content']) ? $parsedData['content'] : null;

    // 将 content 解析为 JSON 数据
    $data = json_decode($content, true);

    // 保存数据到文件
    $pid = isset($_GET['pid']) ? $_GET['pid'] : null;
    $token = isset($_GET['token']) ? $_GET['token'] : null;

    if ($pid && $token && $data) {
        // 确保数据存储结构支持多个数据条目
        if (!isset($dataStore[$pid][$token])) {
            $dataStore[$pid][$token] = []; // 初始化为数组
        }
        $dataStore[$pid][$token][] = $data; // 将新数据追加到数组中
        saveData($dataStore, $dataFile);

        // 返回成功响应
        echo json_encode(['status' => 'success', 'message' => 'Data saved successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid input.']);
    }
    exit;
}

// 处理 GET 请求
if ($_SERVER['REQUEST_METHOD'] === 'GET' && strpos($_SERVER['REQUEST_URI'], '/getParseResult') !== false) {
    // 获取 URL 参数
    $pid = isset($_GET['pid']) ? $_GET['pid'] : null;
    $token = isset($_GET['token']) ? $_GET['token'] : null;

    // 检查数据是否存在
    if (isset($dataStore[$pid][$token])) {
        // 从存储中获取并解码数据
        $data = $dataStore[$pid][$token]; // 直接获取数组
        echo json_encode(['status' => 'success', 'data' => $data]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No data found for the provided pid and token.']);
    }
    exit;
}

// 处理 DELETE 请求
if (($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'GET') && strpos($_SERVER['REQUEST_URI'], '/delResult') !== false) {
    // 获取 URL 参数
    $pid = isset($_GET['pid']) ? $_GET['pid'] : null;
    $token = isset($_GET['token']) ? $_GET['token'] : null;

    // 检查数据是否存在
    if (isset($dataStore[$pid][$token])) {
        $deletedData = $dataStore[$pid][$token];
        // 从存储中删除数据
        unset($dataStore[$pid][$token]);
        // 如果该 pid 下的 token 数组为空，则删除整个 pid
        if (empty($dataStore[$pid])) {
            unset($dataStore[$pid]);
        }
        $delDataStore = loadData($delDataFile);

        if (isset($delDataStore[$pid][$token])) {
            $deletedData = array_merge($deletedData, $delDataStore[$pid][$token]);
        }

        // 保存更新后的数据
        saveData($dataStore, $dataFile);

        if (!isset($delDataStore[$pid])) {
            $delDataStore[$pid] = []; // 初始化为数组
        }
        $delDataStore[$pid][$token] = $deletedData;
        saveData($delDataStore, $delDataFile);

        // 返回成功响应
        echo json_encode(['status' => 'success', 'message' => 'Data deleted successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No data found for the provided pid and token.']);
    }
    exit;
}

// 处理其他请求
http_response_code(404);
echo json_encode(['error' => 'Not Found']);
?>