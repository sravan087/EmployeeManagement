using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.Jwt;
using Owin;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace EmployeeAPI
{
    public partial class Startup
    {
        private void ConfigureAuthZero(IAppBuilder app)
        {
            //Custom Token Authentication
            app.UseOAuthBearerAuthentication(new Microsoft.Owin.Security.OAuth.OAuthBearerAuthenticationOptions());



            //**************Below config to use JW Token from Auth0************************

            //var issuer = "https://" + ConfigurationManager.AppSettings["auth0:Domain"] + "/";
            //var audience = ConfigurationManager.AppSettings["auth0:ClientId"];
            //var secret = TextEncodings.Base64.Encode(
            //    TextEncodings.Base64Url.Decode(ConfigurationManager.AppSettings["auth0:ClientSecret"]));

            //app.UseJwtBearerAuthentication(new JwtBearerAuthenticationOptions
            //{
            //    AuthenticationMode = AuthenticationMode.Active,
            //    AllowedAudiences = new[] { audience },
            //    IssuerSecurityTokenProviders = new[]
            //    {
            //        new SymmetricKeyIssuerSecurityTokenProvider(issuer, secret)
            //    }
            //});
        }
        
    }
}