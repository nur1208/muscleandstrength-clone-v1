import React from "react";

export const TestLoadingScreen = () => {
  require("../styles/testLoadingScreen.css");
  return (
    <>
      <table width="100%" height="100%" cellPadding="20">
        <tbody>
          <tr>
            <td align="center" valign="middle">
              <div className="cf-browser-verification cf-im-under-attack">
                <noscript>
                  <h1 data-translate="turn_on_js" style={{ color: "#bd2426" }}>
                    Please turn JavaScript on and reload the page.
                  </h1>
                </noscript>
                <div id="cf-content" style={{ display: "block" }}>
                  <a href="http://sensationalstickers.com/unprepared.php?date=0"></a>
                  <div id="cf-bubbles">
                    <div className="bubbles"></div>
                    <div className="bubbles"></div>
                    <div className="bubbles"></div>
                  </div>
                  <h1>Loading Product</h1>

                  <div
                    id="no-cookie-warning"
                    className="cookie-warning"
                    data-translate="turn_on_cookies"
                    style={{ display: "none" }}
                  >
                    <p
                      data-translate="turn_on_cookies"
                      style={{ color: "#bd2426" }}
                    >
                      Please enable Cookies and reload the page.
                    </p>
                  </div>
                  <p data-translate="process_is_automatic">
                    This process is automatic. Your browser will redirect to
                    your requested content shortly.
                  </p>
                  <p data-translate="allow_5_secs" id="cf-spinner-allow-5-secs">
                    Please wait for 5 seconds…
                  </p>
                  <p
                    data-translate="redirecting"
                    id="cf-spinner-redirecting"
                    style={{ display: "none" }}
                  >
                    Redirecting…
                  </p>
                </div>

                <form
                  className="challenge-form"
                  id="challenge-form"
                  action="/?__cf_chl_jschl_tk__=b526c6a8ebb74c8ad4e536098d94d9ae0ba35e5d-1614678209-0-AezHFnqgasGNKg2ZMAnVc5BetGXslvmjvh_xZS9Ivklrsy2Q2KdPFtj8wNOkwa6UZeGYA6KGu-KEpeI1_3-VsqhG87q8H8Nkshy16C6NDvCtgdl2pymnfYISdyMd_6ot2SYMOmucaYHdub43A_DrH4oWgocFQhTg8vx_kFiGdDoWd6vI0prUCLgXw7HRGKmELjkC-0Oa7-xLA6n0YEG_c2--WFOrxB_3TIYgypitDhvbo4LSFNwG0qS0p6rIDD48CrN-aIYF7MgqVv_9pet5VEvVTb8YlLlh_5YEfq_M8ZRW2zpRg7TzBR1OLkeGMHAEXw"
                  method="POST"
                  encType="application/x-www-form-urlencoded"
                >
                  {/* <input type="hidden" name="r" value="7d55a91ec65c8c6109d098ebf0a6bdcfbd8279f5-1614678209-0-ARdbNftWKqYc/o/xs5MuhcxJ/PJy8YDUmwPAmttY4dPKMrdh1dMOpLKNRLcwgHRVA4KQXtep/7hEx1RiRTLRV80SDf+8SXVhhR2iPtSQcp0Lg3yqT1WA3T1ZUUigLxUHR/QVXo+z5v83i7bLhK6Tmr/5Ynsy7rA3+bBlUbz/6VJ7RShtoyEMgWEPqHVfTPt1xUtzKXQ54Jzf/t7bbRuNHfVM8OH5BYotRHdVIjlOZdMMIFp+Yfw/8euABjfetvzvTcaiqOj6keg72vyhPyQR9mcP2XU4EwCBAhxCRVoMpMwYBv77UxdWU4JUzf2Go0kMfmLWMPbKcUjBjaKNB4olWfO3HweOAFVaEM08W5120s/JUtb+JuhaM+MHyWgnY6h+7IbWnbRxJgJkaR9eFpMgZhZaoGBo9Kn6RC2DawAaLNNg8Jt0xBlBcXjUQU2OjAiQVwvsBf2bfpi7W0sHHy9sUorVvg9l4gzWxVE1IoMUdOBkbtdyZFoi6nHm+n3G7V3wQpq4QK3Z80b17AFsNosUpaJdWGozEeVuEsU2GRVNmMOzWPAw9fsTmo5ij79uS6H/VkfHQlhkIitg60w+a01ZhFT0wKq1dtSXmyKilLX9VbJ5qTlQQsShXZdFKenqDQ+O/6Pgf4N/FdXg0Ta75BKJd23PSfIg0VQVBdAD8OYkV4B8jTqAk3QXTpZftcaAMf27JxwVYpUQN5ZnaY4dv6ljXDm7RoGYEwcz7jWF34R0ex3uMGfLEUHktSQYLq1FcPkJup36t/OoFleBIpXG1rwYcOFpjA+6MJMjjctgOBLTB+oI+z7U4Q/8b2AfBqKCRlUbIv8FW9aK/DQnhGTdl76I8VyXbQg7HuoaExLYQTLpN4ix4CA3tLdTVvs+iI5m3aVISnPFx+ps/rWFYg/8/LOsDmft8bBMS+h26g1h3uVkfqGm9TL3mrm7TxaSG4ymDNhRBh98om3+QlzNy+MY0JdNJ8wtp4a9KdKod4qQIi9QirtuX43vdgLCJJLBQmMPQMu3SZ0PMz2wqKmvnPTO2AnykEetJGH469sPJ+jBhmwWXYJmqLHzcgpd5ygFZkceeI4LKD5LBsC1sTaMFB8GMeW/VRvTAoZP7ZKxum5LlFNZppxZo4PvmMB0mlsWKxzc0ct+eITo74BayZCzMnifOMK2en5Y63MehFal05sRPsUryf+qzpaxze6/HBf58hN+BHBfUDhKvzSbpWfOVRJEQvDBWD3YFzkIexavxe2JAR0utrQu">
    <input type="hidden" value="90f448593b37a6a872136ce6357e1949" id="jschl-vc" name="jschl_vc"/> */}
                  {/* <!-- <input type="hidden" value="" id="jschl-vc" name="jschl_vc"/> --> */}
                  <input
                    type="hidden"
                    name="pass"
                    value="1614678213.782-l7UHoNvcU3"
                  />
                  <input type="hidden" id="jschl-answer" name="jschl_answer" />
                </form>

                <div
                  id="trk_jschal_nojs"
                  // style="background-image:url('/cdn-cgi/images/trace/jschal/nojs/transparent.gif?ray=6299ae5b19c4fd01')"
                >
                  {" "}
                </div>
              </div>

              {/* <div className="attribution">
                DDoS protection by{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.cloudflare.com/5xx-error-landing/"
                  target="_blank"
                >
                  Cloudflare
                </a>
                <br />
                <span className="ray_id">
                  Ray ID: <code>6299ae5b19c4fd01</code>
                </span>
              </div> */}
            </td>
          </tr>
        </tbody>
      </table>
      <img
        src="/cdn-cgi/images/trace/jschal/js/transparent.gif?ray=6299ae5b19c4fd01"
        id="trk_jschal_js"
        alt=""
      />
    </>
  );
};
