module.exports = {
  chainWebpack: (config) => {
		
		const entry = config.entry('app')
		entry
			.add('@/mock')
			.end()
	},
	devServer: {
		disableHostCheck: true,
		hotOnly: false,
		overlay: {
			warnings: true,
			errors: true
		},
		proxy: {
			'/wicrecloud-essential-data': {
				target: `http://${process.env.URI}/wicrecloud-essential-data`,
				ws: true,
				pathRewrite: {
					'^/wicrecloud-essential-data/': '/'
				}
      },
    }
  }
  
}
