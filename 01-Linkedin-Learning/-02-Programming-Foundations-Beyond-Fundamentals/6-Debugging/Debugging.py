temperature = 50

# if temp < 60 #temperature  # :
if temperature < 60:
    # print(Bring a jacket) # ""
    print("Bring a jacket")

def plant_recommendation(care):
    # if care = 'low': #==
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    elif care == 'medium':
        print('orchid')

# plant_reco('low') # plant_recommendation
plant_recommendation('low')
plant_recommendation('medium')
plant_recommendation('high')