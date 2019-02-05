var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "7",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "152",
        "ko": "14"
    },
    "maxResponseTime": {
        "total": "30096",
        "ok": "435",
        "ko": "30096"
    },
    "meanResponseTime": {
        "total": "4634",
        "ok": "316",
        "ko": "6959"
    },
    "standardDeviation": {
        "total": "10686",
        "ok": "105",
        "ko": "12658"
    },
    "percentiles1": {
        "total": "95",
        "ok": "376",
        "ko": "32"
    },
    "percentiles2": {
        "total": "396",
        "ok": "399",
        "ko": "38"
    },
    "percentiles3": {
        "total": "30059",
        "ok": "426",
        "ko": "30073"
    },
    "percentiles4": {
        "total": "30089",
        "ok": "433",
        "ko": "30091"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7,
        "percentage": 35
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
        "count": 13,
        "percentage": 65
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.488",
        "ok": "0.171",
        "ko": "0.317"
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
        "ok": "7",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "30056"
    },
    "maxResponseTime": {
        "total": "30096",
        "ok": "435",
        "ko": "30096"
    },
    "meanResponseTime": {
        "total": "9242",
        "ok": "316",
        "ko": "30070"
    },
    "standardDeviation": {
        "total": "13635",
        "ok": "105",
        "ko": "19"
    },
    "percentiles1": {
        "total": "399",
        "ok": "376",
        "ko": "30057"
    },
    "percentiles2": {
        "total": "22651",
        "ok": "399",
        "ko": "30077"
    },
    "percentiles3": {
        "total": "30078",
        "ok": "426",
        "ko": "30092"
    },
    "percentiles4": {
        "total": "30092",
        "ok": "433",
        "ko": "30095"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7,
        "percentage": 70
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
        "count": 3,
        "percentage": 30
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.244",
        "ok": "0.171",
        "ko": "0.073"
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
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "maxResponseTime": {
        "total": "38",
        "ok": "-",
        "ko": "38"
    },
    "meanResponseTime": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles1": {
        "total": "30",
        "ok": "-",
        "ko": "30"
    },
    "percentiles2": {
        "total": "33",
        "ok": "-",
        "ko": "33"
    },
    "percentiles3": {
        "total": "37",
        "ok": "-",
        "ko": "37"
    },
    "percentiles4": {
        "total": "38",
        "ok": "-",
        "ko": "38"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
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
        "count": 10,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.244",
        "ok": "-",
        "ko": "0.244"
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