var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "15",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "30024"
    },
    "maxResponseTime": {
        "total": "30057",
        "ok": "831",
        "ko": "30057"
    },
    "meanResponseTime": {
        "total": "7849",
        "ok": "452",
        "ko": "30040"
    },
    "standardDeviation": {
        "total": "12814",
        "ok": "277",
        "ko": "11"
    },
    "percentiles1": {
        "total": "645",
        "ok": "361",
        "ko": "30042"
    },
    "percentiles2": {
        "total": "8129",
        "ok": "806",
        "ko": "30045"
    },
    "percentiles3": {
        "total": "30046",
        "ok": "822",
        "ko": "30055"
    },
    "percentiles4": {
        "total": "30055",
        "ok": "829",
        "ko": "30057"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 5,
        "percentage": 25
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.488",
        "ok": "0.366",
        "ko": "0.122"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "494",
        "ok": "494",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "270",
        "ok": "270",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "percentiles1": {
        "total": "258",
        "ok": "258",
        "ko": "-"
    },
    "percentiles2": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "percentiles3": {
        "total": "462",
        "ok": "462",
        "ko": "-"
    },
    "percentiles4": {
        "total": "488",
        "ok": "488",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.244",
        "ok": "0.244",
        "ko": "-"
    }
}
    },"req_request-2-93baf": {
        type: "REQUEST",
        name: "request_2",
path: "request_2",
pathFormatted: "req_request-2-93baf",
stats: {
    "name": "request_2",
    "numberOfRequests": {
        "total": "10",
        "ok": "5",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "795",
        "ok": "795",
        "ko": "30024"
    },
    "maxResponseTime": {
        "total": "30057",
        "ok": "831",
        "ko": "30057"
    },
    "meanResponseTime": {
        "total": "15428",
        "ok": "816",
        "ko": "30040"
    },
    "standardDeviation": {
        "total": "14612",
        "ok": "12",
        "ko": "11"
    },
    "percentiles1": {
        "total": "15428",
        "ok": "818",
        "ko": "30042"
    },
    "percentiles2": {
        "total": "30040",
        "ok": "818",
        "ko": "30045"
    },
    "percentiles3": {
        "total": "30052",
        "ok": "828",
        "ko": "30055"
    },
    "percentiles4": {
        "total": "30056",
        "ok": "830",
        "ko": "30057"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 40
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 5,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.244",
        "ok": "0.122",
        "ko": "0.122"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
