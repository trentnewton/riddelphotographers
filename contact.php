<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact || Riddel Photographers</title>
    <link rel="stylesheet" href="/riddelphotographers/assets/css/app.css" />
  </head>
	<body class="contact-page">
		<?php include("partials/svg.php"); ?>
    <!--[if lte IE 9]><p class="old-browser-notice">Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> to experience this site.</p><![endif]-->
    <div id="top" class="off-canvas-wrapper">
      <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        <?php include("partials/page-header.php"); ?>
          <main class="regular-page">
            <div class="row">
              <div class="column">
                <header class="page-title">
                  <h1>Contact</h1>
                  <svg class="title-flourish"><use xlink:href="#title-flourish"></use></svg>
                </header>
              </div>
            </div>
            <section class="split-boxes" data-equalizer data-equalize-on="large">
              <div class="columns medium-6 collapse split-box-left" data-equalizer-watch>
                <div class="row-split">
                  <div class="content">
                    <h2>SAY HELLO!</h2>
                    <p>For more information don't hesitate to get in touch.</p>
                    <p>I would love to hear all about your wedding or special event so feel free to include your ideas, themes, or anything else you'd like to tell me.</p>
                    <p>Looking forward to hearing from you!</p>
                  </div>
                </div>
              </div>
              <div class="columns medium-6 collapse split-box-right" data-equalizer-watch>
                <div class="row-split">
                  <div class="content">
                    <form>
                      <div class="row">
                        <div class="medium-6 columns">
                          <label>Your Name
                            <input type="text">
                          </label>
                          <label>Email
                            <input type="email">
                          </label>
                          <label for="">Enquiry
                            <select name="your-recipient" aria-required="true" aria-invalid="false">
                              <option value="Weddings">Weddings</option>
                              <option value="Engagements">Engagements</option>
                              <option value="Families">Families</option>
                              <option value="Other">Other</option>
                            </select>
                          </label>
                        </div>
                        <div class="medium-6 columns">
                          <label>Subject
                            <input type="text">
                          </label>
                          <label for="">Message
                            <textarea name="your-message" cols="40" rows="10" aria-required="true" aria-invalid="false"></textarea>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="column text-right">
                          <button type="button" class="button">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
    <?php include("partials/footer.php"); ?>
	</body>
</html>