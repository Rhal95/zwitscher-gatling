package de.qaware.cloud.nativ.zwitscher.gatling

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.Duration

class BasicSimulation extends Simulation {
  private val httpProtocol = http
    .baseUrl("http://localhost:8081")
    .acceptHeader(" text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptLanguageHeader("de,en-US;q=0.7,en;q=0.3")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0")
  private val requestQuote = http("requestQuotes")
    .get("/")

  private val requestTweets = http("requestTweets")
    .get("/search?q=test")

  private val shortDuration = Duration.create(5, "s")
  private val mediumDuration = Duration.create(30, "s")
  private val longDuration = Duration.create(5, "minutes")

  //opening webpage, wait, reload page
  private val scn1 = scenario("RequestQuotes")
    .exec(requestQuote)
    .pause(shortDuration)
    .exec(requestQuote)
    .pause(shortDuration)

  //opening webpage, searching for tweets, wait, search again
  private val scn2 = scenario("RequestTweets")
      .exec(requestQuote)
      .pause(shortDuration)
      .exec(requestTweets)
      .pause(mediumDuration)
      .exec(requestTweets)
      .pause(mediumDuration)

  setUp(scn1.inject(rampConcurrentUsers(1).to(2500).during(longDuration)),
    scn2.inject(rampConcurrentUsers(1).to(2500).during(longDuration)))
    .protocols(httpProtocol)

}