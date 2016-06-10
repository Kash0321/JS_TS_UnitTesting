using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Kash.JSTSUT.Web.Startup))]
namespace Kash.JSTSUT.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
