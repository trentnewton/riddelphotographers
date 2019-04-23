<?php

return [
    'validate' => [
        'fromName' => 'required',
        'fromEmail' => 'required|valid_email',
        'subject' => 'required',
        'body' => 'required',
    ],
    'filter' => [
        'fromName' => 'trim',
        'fromEmail' => 'trim|sanitize_email',
        'subject' => 'trim',
        'body' => 'trim',
    ],
    'readableNames' => [
        'subject' => 'subject',
        'fromEmail' => 'email',
        'fromName' => 'name',
        'body' => 'enquiry',
    ]
];