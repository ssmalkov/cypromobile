module.exports = Object.freeze([
	{
		name: "ZWayVDev_zway_Remote_5-0-0-B",
		givenName: "Philio Technology Corp (5.0.0) Button",
		parentDeviceId: "5",
		parentDeviceType: "MultySensor",
		probeType: "Button",
		humanName: "Кнопка",
		place: "Входная дверь",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_5-0-48-8",
		givenName: "Tamper  Philio Technology Corp Tamper (#5)",
		parentDeviceId: "5",
		parentDeviceType: "MultySensor",
		probeType: "Tamper",
		humanName: "Взлом устройства",
		place: "Входная дверь",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_5-0-48-10",
		givenName: "Door Philio Technology Corp Door/Window (#5)",
		parentDeviceId: "5",
		parentDeviceType: "MultySensor",
		probeType: "Open",
		humanName: "Дверь",
		place: "Входная дверь",
		order: 1,
		groups: ['security']
	},
	{
		name: "ZWayVDev_zway_5-0-48-12",
		givenName: "Motion  Philio Technology Corp Motion (#5)",
		parentDeviceId: "5",
		parentDeviceType: "MultySensor",
		probeType: "Motion",
		humanName: "Движение",
		place: "Входная дверь",
		order: 3,
		groups: ['security']
	},
	{
		name: "ZWayVDev_zway_5-0-49-1",
		givenName: "Temperature  Philio Technology Corp Temperature (#5)",
		parentDeviceId: "5",
		parentDeviceType: "MultySensor",
		probeType: "Temperature",
		humanName: "Температура",
		place: "Входная дверь",
		order: 9,
		groups: ['environment']
	},
	{
		name: "ZWayVDev_zway_5-0-49-3",
		givenName: "Luminiscence Philio Technology Corp Luminiscence (#5)",
		parentDeviceId: "5",
		parentDeviceType: "MultySensor",
		probeType: "Luminiscence",
		humanName: "Освещенность",
		place: "Входная дверь",
		order: 10,
		groups: ['environment']
	},
	{
		name: "ZWayVDev_zway_5-0-128",
		givenName: "Philio Technology Corp Battery (#5)",
		parentDeviceId: "5",
		parentDeviceType: "MultySensor",
		probeType: "BatteryState",
		humanName: "Состояние батареи",
		place: "Входная дверь",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_6-0-113-2-2-A",
		givenName: "Vision Security CO Alarm (#6)",
		parentDeviceId: "6",
		parentDeviceType: "CO",
		probeType: "CO",
		humanName: "Загазованность",
		place: "Гараж",
		order: 4,
		groups: ['security','environment']
	},
	{
		name: "ZWayVDev_zway_6-0-113-7-3-A",
		givenName: "Vision Security Burglar Alarm (#6)",
		parentDeviceId: "6",
		parentDeviceType: "CO",
		probeType: "Tamper",
		humanName: "Взлом устройства",
		place: "Гараж",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_6-0-128",
		givenName: "Vision Security Battery (#6)",
		parentDeviceId: "6",
		parentDeviceType: "CO",
		probeType: "BatteryState",
		humanName: "Состояние батареи",
		place: "Гараж",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_Remote_8-0-0-B",
		givenName: "Vision Security (8.0.0) Button",
		parentDeviceId: "8",
		parentDeviceType: "Smoke",
		probeType: "Smoke",
		humanName: "Что за удельная кнопка на датчике дыма?",
		place: "Кухня",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_8-0-48-1",
		givenName: "Vision Security General purpose (#8)",
		parentDeviceId: "8",
		parentDeviceType: "Smoke",
		probeType: "Smoke",
		humanName: "Дым",
		place: "Кухня",
		order: 5,
		groups: ['security']
	},
	{
		name: "ZWayVDev_zway_8-0-128",
		givenName: "Vision Security Battery (#8)",
		parentDeviceId: "8",
		parentDeviceType: "Smoke",
		probeType: "BatteryState",
		humanName: "Состояние батареи",
		place: "Кухня",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_9-0-48-6",
		givenName: "Shenzhen Neo Electronics Co., Ltd Water (#9)",
		parentDeviceId: "9",
		parentDeviceType: "Water",
		probeType: "Water",
		humanName: "Протечка",
		place: "Санузел",
		order: 0,
		groups: ['system','security','water']
	},
	{
		name: "ZWayVDev_zway_9-0-113-5-2-A",
		givenName: "Shenzhen Neo Electronics Co., Ltd Water Alarm (#9)",
		parentDeviceId: "9",
		parentDeviceType: "WaterAlarm",
		probeType: "WaterAlarm",
		humanName: "Протечка, звуковой сигнал",
		place: "Санузел",
		order: 6,
		groups: ['system','security','water']
	},
	{
		name: "ZWayVDev_zway_9-0-128",
		givenName: "Shenzhen Neo Electronics Co., Ltd Battery (#9)",
		parentDeviceId: "9",
		parentDeviceType: "WaterAlarm",
		probeType: "BatteryState",
		humanName: "Состояние батареи",
		place: "Санузел",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_10-0-37",
		givenName: "Valve UFairy G.R. Tech Switch (#10)",
		parentDeviceId: "10",
		parentDeviceType: "Valve",
		probeType: "Valve Switch",
		humanName: "Водяной кран",
		place: "Санузел",
		order: 7,
		groups: ['water','control']
	},
	{
		name: "ZWayVDev_zway_11-0-128",
		givenName: "Vision Security Battery (#11)",
		parentDeviceId: "10",
		parentDeviceType: "Lock",
		probeType: "BatteryState",
		humanName: "Состояние батареи",
		place: "Входная дверь",
		order: 0,
		groups: ['system']
	},
	{
		name: "ZWayVDev_zway_11-0-98",
		givenName: "Vision Security Door Lock (#11)",
		parentDeviceId: "10",
		parentDeviceType: "Lock",
		probeType: "Lock",
		humanName: "Замок",
		place: "Входная дверь",
		order: 2,
		groups: ['control']
	},
	{
		name: "ZWayVDev_zway_12-0-37",
		givenName: "TKB Home Switch (#12)",
		parentDeviceId: "12",
		parentDeviceType: "PowerSocket",
		probeType: "PowerSocketSwitch",
		humanName: "Управляемая розетка",
		place: "Зал",
		order: 8,
		groups: ['control','electricity']
	}
]);
