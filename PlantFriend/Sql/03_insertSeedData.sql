-- insert User data
insert into [User] (Id, FirebaseId, [Admin], FirstName, LastName, Email, ImageUrl, DateCreated)
	values 
		('b1a01661-4331-ec11-8172-0800275f12c6', 'P6NWPzbF3VQVhf4lVNMFQgiZPRe2', 1, 'Matthew', 'Gonzales', 'gonzalesmattg@gmail.com', '', cast('2021-12-10' as datetime))
;

-- insert Plant data
insert into Plant (Id, [Name], Light, Water, WaterFrequency, Temperature, Nutrients, NutrientsFrequency, [Description], CareNeeds, ImageUrl)
	values
		('431142f1-b9eb-4dbb-b31b-942f10beb49a', 'Monstera Deliciousa', '', '', '', '', '', '', '', '', 'https://www.thespruce.com/thmb/-3kyCBc49-NMlZ0WA3y8iZGSpSo=/3346x3346/smart/filters:no_upscale()/grow-monstera-adansonii-swiss-cheese-plant-1902774-hero-01-dc903dae459a4dd5b919d5e1d1bee9d3.jpg'),
		('A84D6A35-B65A-EC11-817C-0800275F12C6', 'Pothos Plant', '', '', '', '', '', '', '', '', 'https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610489398028-Q5JAILEOCGTE26U0MV36/golden-pothos-plant.jpg')
;

-- insert UserPlant data
insert into UserPlant (Id, PlantId, UserId, [Status], PetName, DateCreated, InitialAgeDays, AgeStage)
	values
	()
;

-- insert Log data -- note: will need to test datetime constructor with C# first
insert into [Log] (Id, UserPlantId, DateCreated, EntryNumber, [Entry], EntryDate)
	values
	;

-- insert UserInventory data
insert into UserInventory (Id, InventoryId, UserId, Quantity, [Name], [Description])
	values	
;

431142f1-b9eb-4dbb-b31b-942f10beb49a
79fa0c8e-9a30-4932-945d-330933d7222d
34cca69b-af82-4426-b171-139730f08235
7dd53605-3699-4772-a0d8-a2a56c994af1
2b3a3e1a-880a-4271-94bc-b854edf6dba0
d805a9e5-65b4-47e9-a0e3-8135adc8f779
7c392b6d-4403-4470-ac3b-8bfd2ec9d28a
8b19f8c2-e5b8-444e-a4ca-af57c7fdf8a2
1084c55b-264e-4736-b588-2c49ff7cc6aa
4c5534e9-e061-4be7-b547-a04d45e377db
3044597f-7940-45ed-9f89-9c448dc5aea2
fa8ed213-924a-41a6-9467-36126f7551c5
9530f9e0-1eaf-439f-ba2c-76a16846c9af
ee973e1b-0e95-4f23-8907-d84370cf9dde
2a2c7249-38e7-4e2e-8afd-b74681d8e129
11709bbc-194d-4980-bbc8-516d60e2db97
c952799b-6e6f-4783-bca7-fcadc81c12e7
7547bc50-4944-457b-bf98-20f0b6c93d4c
8c525283-2744-4148-b417-f9df21397382
9dc4945e-a2d6-4589-903e-0ac077407034
cde29fda-e0f9-4b35-9c25-1831f6f745e9
d1864376-4b17-436d-8a83-3a2bc02d0568
ab65133a-20d0-4c4c-963a-293b79810921
cc1069a2-d026-485c-968b-ea9129a1f46b
2bd20040-5e9e-44d7-837e-880ebd1521f2
8e4a89d8-0104-40ad-9988-473badf9ec69
4db185b9-b473-46a0-82a5-e859b13f8c80
21551471-8ca3-4cef-896c-7f56d1215077
11c0bd19-cce5-407c-ad96-a6021445de50
8533fe8e-e778-472e-a2f8-33db4404f3e8
3462adc9-636c-428d-8a24-b551fb629357
33cc1b3e-d325-438a-9cf7-58edb4ff47d6
5b140c12-acb2-4794-bc4d-fb3ab461a2db
a57e48bc-0706-4745-872c-690cec46b3a2
497a7e41-7884-4555-a8cb-44a51e97680e
c3256eb1-8585-40af-8c5e-b34d4a09fe27
b834b1d4-c7fb-4ef6-a4f9-19c8643ea295
deb75fb7-8735-47b1-a07f-12a6984b055f
27adf05c-03bb-468c-8b80-71bc2d641c46
8243662e-602b-4c5f-a623-4345f6c463e5