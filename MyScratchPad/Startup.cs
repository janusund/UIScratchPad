using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyScratchPad.Startup))]
namespace MyScratchPad
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
