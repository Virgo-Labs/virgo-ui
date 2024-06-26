import { join } from 'node:path'
import { defineConfig } from 'vitest/config'
import { virgoVuePkgRoot } from './scripts/paths'

function noop() {}

export default defineConfig({
	test: {
		open: !process.env.HEADLESS,
		isolate: false,
		reporters: [
			'json',
			{
				onInit: noop,
				onPathsCollected: noop,
				onCollected: noop,
				onFinished: noop,
				onTaskUpdate: noop,
				onTestRemoved: noop,
				onWatcherStart: noop,
				onWatcherRerun: noop,
				onServerRestart: noop,
				onUserConsoleLog: noop
			},
			'default'
		],
		setupFiles: [join(virgoVuePkgRoot, 'test', 'setup.vitest.ts')]
	}
})
