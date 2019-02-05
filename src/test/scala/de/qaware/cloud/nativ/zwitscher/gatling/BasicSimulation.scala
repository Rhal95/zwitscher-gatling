package de.qaware.cloud.nativ.zwitscher.gatling

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.Duration

class BasicSimulation extends Simulation {
  val httpProtocol = http
    .baseUrl("http://localhost:8081")
    .acceptHeader(" text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptLanguageHeader("de,en-US;q=0.7,en;q=0.3")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0")

  val requestQuote = http("request_1")
    .get("/")

  val requestTweets = http("request_2")
    .get("/search?q=test")

  val mediumDuration = Duration.create(5, "s")
  val longDuration = Duration.create(30, "s")

  //opening webpage, wait, reload page
  val scn1 = scenario("RequestQuotes")
    .exec(requestQuote)
    .pause(mediumDuration)
    .exec(requestQuote)
    .pause(mediumDuration)

  //opening webpage, searching for tweets, wait, search again
  val scn2 = scenario("RequestTweets")
      .exec(requestQuote)
      .pause(mediumDuration)
      .exec(requestTweets)
      .pause(longDuration)
      .exec(requestTweets)
      .pause(longDuration)

  setUp(scn1.inject(atOnceUsers(4)),
    scn2.inject(atOnceUsers(4)))
    .protocols(httpProtocol)

}