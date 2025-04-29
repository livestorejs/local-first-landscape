// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'livestore',
	Name: 'LiveStore',
	Description: 'Client-centric local-first data layer for high-performance apps',
	Website: 'https://livestore.dev',
	Deployment: ['Self-hosted'],
	// License: 'MIT',
	MaturityLevel: 'Beta',
	// AuthIdentity: {AuthenticationMethod: {data: ['']}},
	// TODO update link
	GetStarted: 'https://livestore.dev',
	// UserControlDataOwnership: ,
	GitHub: 'https://github.com/livestore-dev/livestore',
	DevelopmentWorkflowsDX: { DebuggingTools: { data: ['DevTools', 'Data Inspector', 'Network Inspector'] } },
	AppTarget: {
		LanguageSDK: { data: ['TypeScript'] },
		ClientBundleSize: { data: '~500kb gzipped', comment: 'For web apps, LiveStore ships with a SQLite WASM build (~600kb / 300kb gzipped) and the library itself is around 500kb / 170kb gzipped.' },
		FrameworkIntegrations: { data: ['React', 'React Native', 'Solid'] },
		Platform: { data: ['Browser', 'Node', 'iOS', 'Android'] }
	},
	Networking: {
		Topology: { data: 'Client-Server' },
		Protocol: { data: ['WebSockets', 'HTTP', 'SSE'], comment: 'Given LiveStore supports arbitrary sync backends, any kind of network protocol can be used.' },
	},
	ServerSideData: {
		PersistenceMechanism: { data: ['Cloudflare D1', 'Postgres', 'SQLite', 'Custom'], comment: 'Almost anything works as long as it can persist an eventlog.' },
		DataModelParadigm: { data: 'Eventlog' },
		DataSize: { data: '10GB', comment: `Theoretically there isn't an upper limit to the eventlog size however at some point it might become impractical to sync the eventlog over the network.` }
	},
	ClientSideData: {
		QueryAPI: {
			data: ['Reactive queries', 'Signals-based Reactivity', 'Sync']
		},
		OptimisticUpdates: { data: 'Yes', comment: `There isn't an explicit concept of "optimistic updates" in LiveStore. Events are always executed locally first and then synced to other clients. In case of a conflict, the event is rebased and replayed. This is similar to how Git works.` },
		PersistenceMechanism: { data: ['IndexedDB', 'OPFS'] },
		PersistenceFeatures: { data: 'Indexes' },
		DataModel: { data: 'Event Sourcing', comment: 'LiveStore follows the event sourcing pattern which separates writes into an eventlog and materializes state into a local SQLite database.' },
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
		DataSize: { data: '<1GB', comment: 'The upper limit is mostly determined by the used browser or client device. SQLite stores data fairly efficiently, so you should rarely hit any limits in regards to size.' },
		LocalRefreshLatency: { data: '~1ms', comment: 'LiveStore is designed to enable next-frame refresh latency by using an in-memory SQLite database with a signals-based reactivivity system.' }
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication'] },
		ConflictHandling: { data: 'Automatic via CRDT' },
		WhereResolutionOccurs: { data: 'Client' },
		WhatGetsSynced: {
			data: {
				ClientToClient: 'Ops',
			},
		},
	},
	InitialReleaseDate: new Date('2021-12-01'),
})
