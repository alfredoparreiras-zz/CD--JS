const getSleepHours = day => { 
    switch(day){ 
        case 'sunday': 
            return 8;
            break;
        case 'monday': 
            return 7;
            break;
        case 'tuesday': 
            return 6;
            break;
        case 'wednesday': 
            return 5;
            break;
        case 'thursday': 
            return 4;
            break;
        case 'friday': 
            return 10;
            break;
        case 'saturday': 
            return 10;
            break;
        
    }
}