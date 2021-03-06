/****** Object:  Table [dbo].[Log]    Script Date: 1/8/2022 7:20:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Log](
	[Id] [uniqueidentifier] NOT NULL,
	[UserPlantId] [uniqueidentifier] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[EntryNumber] [int] NOT NULL,
	[Entry] [varchar](500) NOT NULL,
	[EntryDate] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Plant]    Script Date: 1/8/2022 7:20:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Plant](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Light] [varchar](4000) NULL,
	[Water] [varchar](300) NULL,
	[WaterFrequency] [varchar](4000) NULL,
	[Temperature] [varchar](400) NULL,
	[Nutrients] [varchar](4000) NULL,
	[NutrientsFrequency] [varchar](4000) NULL,
	[Description] [varchar](4000) NULL,
	[CareNeeds] [varchar](4000) NULL,
	[ImageUrl] [nvarchar](4000) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 1/8/2022 7:20:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [uniqueidentifier] NOT NULL,
	[FirebaseId] [varchar](50) NOT NULL,
	[Admin] [bit] NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[ImageUrl] [nvarchar](4000) NULL,
	[DateCreated] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserInventory]    Script Date: 1/8/2022 7:20:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserInventory](
	[Id] [uniqueidentifier] NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Description] [varchar](500) NOT NULL,
	[ImageUrl] [nvarchar](4000) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPlant]    Script Date: 1/8/2022 7:20:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPlant](
	[Id] [uniqueidentifier] NOT NULL,
	[PlantId] [uniqueidentifier] NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[Status] [varchar](20) NULL,
	[PetName] [varchar](50) NULL,
	[DateCreated] [datetime] NOT NULL,
	[InitialAgeDays] [int] NOT NULL,
	[AgeStage] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Log] ([Id], [UserPlantId], [DateCreated], [EntryNumber], [Entry], [EntryDate]) VALUES (N'f871f384-e16d-ec11-8155-0800275f12c6', N'6493f191-fb6c-ec11-8153-0800275f12c6', CAST(N'2022-01-04T22:39:51.723' AS DateTime), 1, N'This is a new entry', CAST(N'2022-01-04T00:00:00.000' AS DateTime))
INSERT [dbo].[Log] ([Id], [UserPlantId], [DateCreated], [EntryNumber], [Entry], [EntryDate]) VALUES (N'e3047d72-e46d-ec11-8155-0800275f12c6', N'31d5b4c0-fb6c-ec11-8153-0800275f12c6', CAST(N'2022-01-04T23:00:49.240' AS DateTime), 1, N'Plant is flowering, but they don''t look very appealing.', CAST(N'2022-01-04T00:00:00.000' AS DateTime))
INSERT [dbo].[Log] ([Id], [UserPlantId], [DateCreated], [EntryNumber], [Entry], [EntryDate]) VALUES (N'9b3e988b-e46d-ec11-8155-0800275f12c6', N'31d5b4c0-fb6c-ec11-8153-0800275f12c6', CAST(N'2022-01-04T23:01:31.360' AS DateTime), 2, N'Trimmed the flowers and this doesn''t harm the plant.', CAST(N'2022-01-04T00:00:00.000' AS DateTime))
INSERT [dbo].[Log] ([Id], [UserPlantId], [DateCreated], [EntryNumber], [Entry], [EntryDate]) VALUES (N'665d1ca4-e46d-ec11-8155-0800275f12c6', N'31d5b4c0-fb6c-ec11-8153-0800275f12c6', CAST(N'2022-01-04T23:02:12.490' AS DateTime), 3, N'Repotted the plant into it''s own pot.', CAST(N'2022-01-04T00:00:00.000' AS DateTime))
INSERT [dbo].[Log] ([Id], [UserPlantId], [DateCreated], [EntryNumber], [Entry], [EntryDate]) VALUES (N'c9abef68-9670-ec11-8156-0800275f12c6', N'a64a8ad2-fb6c-ec11-8153-0800275f12c6', CAST(N'2022-01-08T09:19:45.957' AS DateTime), 1, N'This is my first entry', CAST(N'2022-01-08T00:00:00.000' AS DateTime))
INSERT [dbo].[Plant] ([Id], [Name], [Light], [Water], [WaterFrequency], [Temperature], [Nutrients], [NutrientsFrequency], [Description], [CareNeeds], [ImageUrl]) VALUES (N'd9e9c53d-b369-ec11-8151-0800275f12c6', N'Red Aglaonema', N'Prefers bright indirect light, but can adapt to low light.', N'Water through when the top 50% of soil is dry. Discard saucer water.', N'N/A', N'Prefers 60''s and 70''s. Avoid drafts and drastic changes.', N'Balanced liquid food (20-20-20).', N'Once a month during Summer and Spring.', N'Aglaonemas are often vibrant and colorful, with strikingly patterned leaves. Because they’re so easy-going, Aglaonemas are perfectly suited for a modern living room or office, dim bedroom, or cozy study. Because of their tolerance for both moist and dry conditions, and the fact that they will thrive with low light, they are a perfect choice for less than ideal light conditions or forgetful plant owners.', N'N/A', N'https://bloomscape.com/wp-content/uploads/2019/05/bloomscape_aglaonema-pink-splash_medium_detail-scaled.jpg?ver=396643')
INSERT [dbo].[Plant] ([Id], [Name], [Light], [Water], [WaterFrequency], [Temperature], [Nutrients], [NutrientsFrequency], [Description], [CareNeeds], [ImageUrl]) VALUES (N'f5b4e602-5c6b-ec11-8151-0800275f12c6', N'Dracaena (Corn Plant)', N'A good mix of sun shine and shade is ideal for this dracaena, but hardly any direct sunlight. Although it grows quicker and better in bright light you''ll also find it survives and grows well enough in low light conditions.', N'Keep the soil slightly damp to the touch and in the winter slightly dry.', N'N/A', N'Temperatures from 60°F (15°C) - 75°F (24°C) are ideal. Under 55°F/12°C is going to harm the plant which may become noticeable if the leaves begin curling. Try and avoid the plant being near cold drafts, which will also cause harm.', N'From April until September use a liquid fertilizer that''s diluted.', N'Once every 2 - 3 weeks, whilst it''s growing.', N'Dracaena is an adaptable, easy-to-care-for house plant that does well indoors or outdoors in partial shade if you live in a subtropical area.', N'You will find the lower leaves on this plant turn yellow after a period of time which is normal, and the leaves on this plant only have a life span of 2 - 3 years anyway. Remove the lower leaves when they begin to yellow. You can also cut the top of a cane (stem) when it has reached the height you wish it to grow up to and re-plant the cutting.', N'http://cdn.shopify.com/s/files/1/0062/8532/8445/products/Dracaena_Corn_Plant_BB_600x600_a5c5ec3c-335d-4191-b334-b6153eb82ef6_grande.jpg?v=1576090064')
INSERT [dbo].[Plant] ([Id], [Name], [Light], [Water], [WaterFrequency], [Temperature], [Nutrients], [NutrientsFrequency], [Description], [CareNeeds], [ImageUrl]) VALUES (N'68bed095-5e6b-ec11-8151-0800275f12c6', N'Dracaena Trifasciata', N'Grow well in any light, but bright indirect is best. Avoid direct light or outdoors.', N'Water only the soil but not the leaves. Allow soil to completely dry in winter, otherwise may water every 2-3 days.', N'Winter: Allow soil to dry. Otherwise 2-3 days.', N'70-90F, extreme temperatures will kill the plant.', N'Feed with mild cactus fertilizer during growing season or half-diluted 10-10-10 slow release.', N'Do not fertilize in Winter, only during grow seasons', N'Commonly known as the Snake Plant, this is a hardy, popular houseplant, easy to grow, and nearly indestructible.', N'n/a', N'https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1613711721/vendor/7830/catalog/product/2/0/20200304122155_file_5e5ef4a3ccb60_5e5ef7b7cd5fa_602ed8e3ebe39._602ed8e661063..jpg')
INSERT [dbo].[Plant] ([Id], [Name], [Light], [Water], [WaterFrequency], [Temperature], [Nutrients], [NutrientsFrequency], [Description], [CareNeeds], [ImageUrl]) VALUES (N'a84d6a35-b65a-ec11-817c-0800275f12c6', N'Pothos Plant', N'Pothos thrives in bright but indirect light, however this plant will also comfortably adapt to low and medium light spaces. Growth will be slower in these conditions but the plant should remain healthy.', N'As a general rule, you should water a pothos once every week in warmer months and once every two weeks in colder months.', N'n/a', N'Pothos will survive a wide range of environmental conditions, but grows best at 70- 90°F. Minimum temperatures below 70°F and maximum temperatures above 90°F will greatly retard growth.', N'A balanced liquid fertilizer is best such as 10-10-10- or 20-20-20.', N'Every 2-3 months in growing season.', N'Pothos is considered one of the best indoor plants to purify the air, removing common toxins such as formaldehyde, xylene, and benzene.   Pothos is also called hunter’s robe, arum ivy, money plant, taro vine. It is also sometimes referred to as devil’s ivy because it is nearly impossible to kill and, in nature, can become invasive. ', N'n/a', N'https://nouveauraw.com/wp-content/uploads/2020/01/Pothos-Golden-Pothos-plant-800-great-coloring.png')
INSERT [dbo].[Plant] ([Id], [Name], [Light], [Water], [WaterFrequency], [Temperature], [Nutrients], [NutrientsFrequency], [Description], [CareNeeds], [ImageUrl]) VALUES (N'431142f1-b9eb-4dbb-b31b-942f10beb49a', N'Monstera Deliciousa', N'Medium Light', N'1/2 cup', N'Once a week', N'70 degrees F', N'3-2-3', N'Once a month', N'Monsteras are species of evergreen tropical vines and shrubs that are native to Central America.', N'n/a', N'https://www.thespruce.com/thmb/-3kyCBc49-NMlZ0WA3y8iZGSpSo=/3346x3346/smart/filters:no_upscale()/grow-monstera-adansonii-swiss-cheese-plant-1902774-hero-01-dc903dae459a4dd5b919d5e1d1bee9d3.jpg')
INSERT [dbo].[User] ([Id], [FirebaseId], [Admin], [FirstName], [LastName], [Email], [ImageUrl], [DateCreated]) VALUES (N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', N'ofiPqxJfxwMIyQeyKTQpQo2dDTj2', 1, N'Matthew', N'Gonzales', N'gonzalesmattg@gmail.com', N'https://lh3.googleusercontent.com/a-/AOh14GhylhyX2I8TnBC8wkAOtaks2E8V9gp7vFMiAlhUPQ=s96-c', CAST(N'2021-12-10T00:00:00.000' AS DateTime))
INSERT [dbo].[UserInventory] ([Id], [UserId], [Quantity], [Name], [Description], [ImageUrl]) VALUES (N'21edad94-0e6d-ec11-8153-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', 3, N'Moss Pole', N'These totem pole plant supports help creeping plants with aerial roots grow vertically towards the light, mimicking their natural environment.', N'https://assets.bigcartel.com/product_images/314518356/Screen+Shot+2021-08-30+at+10.26.40+PM.png?auto=format&fit=max&w=800')
INSERT [dbo].[UserInventory] ([Id], [UserId], [Quantity], [Name], [Description], [ImageUrl]) VALUES (N'3fc26d6c-bb6d-ec11-8153-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', 1, N'Cactus and Succulent Potting Soil', N'Best for plants that benefit from soil that does not retain water.', N'https://www.sunnyplants.com/wp-content/uploads/cactus-succulent-soil-1.jpg')
INSERT [dbo].[UserInventory] ([Id], [UserId], [Quantity], [Name], [Description], [ImageUrl]) VALUES (N'40c26d6c-bb6d-ec11-8153-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', 1, N'Regular Potting Mix', N'Retains water, provides nutrients, and allows aeration.', N'https://s3.amazonaws.com/finegardening.s3.tauntoncloud.com/app/uploads/2014/06/14013839/FG157-pottingsoil-main-700x700-700x700.jpg')
INSERT [dbo].[UserInventory] ([Id], [UserId], [Quantity], [Name], [Description], [ImageUrl]) VALUES (N'33fb8308-bc5b-ec11-817c-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', 1, N'Hand Trowel', N'Use the hand trowel to dig small holes, transplant seedlings, plant bulbs, and similar tasks.', N'https://cdn.shopify.com/s/files/1/0013/6393/5320/products/jp-general-shop-piginor-hand-trowel20200317_210031_2048x2048.jpg?v=1603079512')
INSERT [dbo].[UserPlant] ([Id], [PlantId], [UserId], [Status], [PetName], [DateCreated], [InitialAgeDays], [AgeStage]) VALUES (N'6493f191-fb6c-ec11-8153-0800275f12c6', N'd9e9c53d-b369-ec11-8151-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', N'Alive and Well', N'Victoria', CAST(N'2022-01-03T19:13:49.273' AS DateTime), 45, N'Dormant')
INSERT [dbo].[UserPlant] ([Id], [PlantId], [UserId], [Status], [PetName], [DateCreated], [InitialAgeDays], [AgeStage]) VALUES (N'31d5b4c0-fb6c-ec11-8153-0800275f12c6', N'd9e9c53d-b369-ec11-8151-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', N'Alive and Well', N'Vinni', CAST(N'2022-01-03T19:15:07.730' AS DateTime), 55, N'Dormant')
INSERT [dbo].[UserPlant] ([Id], [PlantId], [UserId], [Status], [PetName], [DateCreated], [InitialAgeDays], [AgeStage]) VALUES (N'a64a8ad2-fb6c-ec11-8153-0800275f12c6', N'f5b4e602-5c6b-ec11-8151-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', N'Alive and Well', N'Cobb', CAST(N'2022-01-03T19:15:37.650' AS DateTime), 66, N'Dormant')
INSERT [dbo].[UserPlant] ([Id], [PlantId], [UserId], [Status], [PetName], [DateCreated], [InitialAgeDays], [AgeStage]) VALUES (N'38b661e6-0b6d-ec11-8153-0800275f12c6', N'a84d6a35-b65a-ec11-817c-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', N'Alive', N'Porthos', CAST(N'2022-01-03T21:10:42.887' AS DateTime), 55, N'Dormant')
INSERT [dbo].[UserPlant] ([Id], [PlantId], [UserId], [Status], [PetName], [DateCreated], [InitialAgeDays], [AgeStage]) VALUES (N'f925421c-0e6d-ec11-8153-0800275f12c6', N'68bed095-5e6b-ec11-8151-0800275f12c6', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', N'Alive and Well', N'DJ Snake', CAST(N'2022-01-03T21:26:32.270' AS DateTime), 78, N'Dormant')
INSERT [dbo].[UserPlant] ([Id], [PlantId], [UserId], [Status], [PetName], [DateCreated], [InitialAgeDays], [AgeStage]) VALUES (N'a37544cd-b75b-ec11-817c-0800275f12c6', N'431142f1-b9eb-4dbb-b31b-942f10beb49a', N'fd0ac8db-ac5b-ec11-817c-0800275f12c6', N'Alive', N'Jazz', CAST(N'2021-12-10T00:00:00.000' AS DateTime), 120, N'Youth')
ALTER TABLE [dbo].[Log] ADD  DEFAULT (newsequentialid()) FOR [Id]
GO
ALTER TABLE [dbo].[Plant] ADD  DEFAULT (newsequentialid()) FOR [Id]
GO
ALTER TABLE [dbo].[User] ADD  DEFAULT (newsequentialid()) FOR [Id]
GO
ALTER TABLE [dbo].[User] ADD  DEFAULT ((0)) FOR [Admin]
GO
ALTER TABLE [dbo].[UserInventory] ADD  DEFAULT (newsequentialid()) FOR [Id]
GO
ALTER TABLE [dbo].[UserPlant] ADD  DEFAULT (newsequentialid()) FOR [Id]
GO
ALTER TABLE [dbo].[Log]  WITH CHECK ADD  CONSTRAINT [FK_Log_UserPlantId] FOREIGN KEY([UserPlantId])
REFERENCES [dbo].[UserPlant] ([Id])
GO
ALTER TABLE [dbo].[Log] CHECK CONSTRAINT [FK_Log_UserPlantId]
GO
ALTER TABLE [dbo].[UserInventory]  WITH CHECK ADD  CONSTRAINT [FK_UserInventory_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[UserInventory] CHECK CONSTRAINT [FK_UserInventory_UserId]
GO
ALTER TABLE [dbo].[UserPlant]  WITH CHECK ADD  CONSTRAINT [FK_UserPlant_PlantId] FOREIGN KEY([PlantId])
REFERENCES [dbo].[Plant] ([Id])
GO
ALTER TABLE [dbo].[UserPlant] CHECK CONSTRAINT [FK_UserPlant_PlantId]
GO
ALTER TABLE [dbo].[UserPlant]  WITH CHECK ADD  CONSTRAINT [FK_UserPlant_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[UserPlant] CHECK CONSTRAINT [FK_UserPlant_UserId]
GO
USE [master]
GO
ALTER DATABASE [PlantFriend] SET  READ_WRITE 
GO
