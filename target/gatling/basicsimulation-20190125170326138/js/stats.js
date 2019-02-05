var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "9",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "242",
        "ko": "32"
    },
    "maxResponseTime": {
        "total": "30145",
        "ok": "321",
        "ko": "30145"
    },
    "meanResponseTime": {
        "total": "1708",
        "ok": "292",
        "ko": "2867"
    },
    "standardDeviation": {
        "total": "6524",
        "ok": "25",
        "ko": "8626"
    },
    "percentiles1": {
        "total": "212",
        "ok": "295",
        "ko": "151"
    },
    "percentiles2": {
        "total": "298",
        "ok": "310",
        "ko": "168"
    },
    "percentiles3": {
        "total": "1812",
        "ok": "320",
        "ko": "15164"
    },
    "percentiles4": {
        "total": "24478",
        "ok": "321",
        "ko": "27149"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9,
        "percentage": 45
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
        "count": 11,
        "percentage": 55
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.488",
        "ok": "0.22",
        "ko": "0.268"
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
        "ok": "9",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "242",
        "ok": "242",
        "ko": "30145"
    },
    "maxResponseTime": {
        "total": "30145",
        "ok": "321",
        "ko": "30145"
    },
    "meanResponseTime": {
        "total": "3277",
        "ok": "292",
        "ko": "30145"
    },
    "standardDeviation": {
        "total": "8956",
        "ok": "25",
        "ko": "0"
    },
    "percentiles1": {
        "total": "301",
        "ok": "295",
        "ko": "30145"
    },
    "percentiles2": {
        "total": "317",
        "ok": "310",
        "ko": "30145"
    },
    "percentiles3": {
        "total": "16724",
        "ok": "320",
        "ko": "30145"
    },
    "percentiles4": {
        "total": "27461",
        "ok": "321",
        "ko": "30145"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9,
        "percentage": 90
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
        "count": 1,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.244",
        "ok": "0.22",
        "ko": "0.024"
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
        "total": "32",
        "ok": "-",
        "ko": "32"
    },
    "maxResponseTime": {
        "total": "182",
        "ok": "-",
        "ko": "182"
    },
    "meanResponseTime": {
        "total": "139",
        "ok": "-",
        "ko": "139"
    },
    "standardDeviation": {
        "total": "40",
        "ok": "-",
        "ko": "40"
    },
    "percentiles1": {
        "total": "146",
        "ok": "-",
        "ko": "146"
    },
    "percentiles2": {
        "total": "165",
        "ok": "-",
        "ko": "165"
    },
    "percentiles3": {
        "total": "176",
        "ok": "-",
        "ko": "176"
    },
    "percentiles4": {
        "total": "181",
        "ok": "-",
        "ko": "181"
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
