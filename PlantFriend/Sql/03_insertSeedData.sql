-- insert User data
insert into [User] (Id, FirebaseId, [Admin], FirstName, LastName, Email, ImageUrl, DateCreated)
	values 
		('FD0AC8DB-AC5B-EC11-817C-0800275F12C6', 'ofiPqxJfxwMIyQeyKTQpQo2dDTj2', 1, 'Matthew', 'Gonzales', 'gonzalesmattg@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14GhylhyX2I8TnBC8wkAOtaks2E8V9gp7vFMiAlhUPQ=s96-c', cast('2021-12-10' as datetime))
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
		('A37544CD-B75B-EC11-817C-0800275F12C6', '431142f1-b9eb-4dbb-b31b-942f10beb49a', 'FD0AC8DB-AC5B-EC11-817C-0800275F12C6', 'Alive', 'Jazz', cast('2021-12-10' as datetime), 120, 'Youth')
;

-- insert Log data -- note: will need to test datetime constructor with C# first
insert into [Log] (Id, UserPlantId, DateCreated, EntryNumber, [Entry], EntryDate)
	values
		('F21679DB-BE5B-EC11-817C-0800275F12C6', 'A37544CD-B75B-EC11-817C-0800275F12C6', cast('2021-12-10' as datetime), 1, 'This is a sample diary entry for the plant', cast('2021-12-10' as datetime))
;

-- insert UserInventory data
insert into UserInventory (Id, UserId, Quantity, [Name], [Description])
	values	
		('33FB8308-BC5B-EC11-817C-0800275F12C6', 'FD0AC8DB-AC5B-EC11-817C-0800275F12C6', 1, 'Hand Trowel', 'Use the hand trowel to dig small holes, transplant seedlings, plant bulbs, and perform similar tasks.')
;