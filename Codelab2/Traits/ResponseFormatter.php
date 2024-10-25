<?php

namespace Traits;

trait ResponseFormatter{
    public function responseFormatter($code, $message, $data = null){
        return json_encode ([
            "code" => $code,
            "message" => $message,
            "data" => $data
        ], JSON_PRETTY_PRINT);
    }
}
