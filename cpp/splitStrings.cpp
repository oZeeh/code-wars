#include <vector>
#include <string>
#include <iostream>

std::vector<std::string> splitStringIntoPairs(const std::string& str) {
    std::vector<std::string> result;

    for (size_t i = 0; i < str.length(); i += 2) {
        if (i + 1 < str.length()) {
            result.push_back(str.substr(i, 2)); 
        } else {
            result.push_back(str.substr(i, 1) + "_"); 
        }
    }

    return result;
}

auto main () -> int {
    std::string input = "abcdefg";
    std::vector<std::string> pairs = splitStringIntoPairs(input);

    for (const auto& pair : pairs) {
        std::cout << pair << std::endl;
    }

    return 0;
}