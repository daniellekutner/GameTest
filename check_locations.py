import csv
import geopy.distance

R = 6373.0


def upload_data():
    base_map_loc = []
    with open('base_map_locations.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in list(csv_reader)[1:]:
            base_map_loc.append((float(row[7]), float(row[8])))
    experiments_loc = []
    with open('experiment_data.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in list(csv_reader)[1:]:
            experiments_loc.append((float(row[0]), float(row[1])))
    return list(set(experiments_loc)), base_map_loc
    # return experiments_loc, base_map_loc


def calc_distance(lon1, lat1, lon2, lat2):
    distance = geopy.distance.vincenty((lon1, lat1), (lon2, lat2)).km
    return distance


def check_accuracy(point, base_map_loc):
    return min([calc_distance(point[0], point[1], loc[0], loc[1]) for loc in base_map_loc])


def find_min_distance(experiments_loc, base_map_loc):
    min_dist_list = []
    for loc in experiments_loc:
        min_dist_list.append(check_accuracy(loc, base_map_loc))
    return min_dist_list


experiments_locations, base_map_locations = upload_data()
print(find_min_distance(experiments_locations, base_map_locations))
