using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;

[assembly: OwinStartup(typeof(EmployeeSecurityAPI.Startup))]

namespace EmployeeSecurityAPI
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            var myProvider = new EmployeeAuthProvider();
            OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions() {
                  AllowInsecureHttp = true,
                  TokenEndpointPath = new PathString("/oauth/token"),
                  AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                  Provider = myProvider
            };

            app.UseOAuthAuthorizationServer(options);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

        }
    }
}
