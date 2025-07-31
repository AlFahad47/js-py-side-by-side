places_in_dhaka = ["Lalbagh Fort", "Ahsan Manzil", "Dhaka University"]
city_name = "Dhaka"
current_temperature = 32.5
is_monsoon = True

def check_and_print_message(variable, name):
    if isinstance(variable,list):
        print(f"The variable {name} is an array.")
    else:
        print(f"The variable {name} is NOT! an array.")


check_and_print_message(places_in_dhaka,"places_in_dhaka")
check_and_print_message(city_name,"city_name")
check_and_print_message(current_temperature,"current_temperature")
check_and_print_message(is_monsoon,"is_monsoon")

