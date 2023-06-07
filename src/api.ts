export interface WorkList {
	[key: string] : {
		itemCompose: {
			[key: string]: {
				id: number,
				title: string,
			}
		}
	}
}