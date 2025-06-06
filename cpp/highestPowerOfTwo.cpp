#include <iostream>

unsigned long long solution (unsigned long long n)
{
    if (n == 0)
    {
        return 0;
    }

    return n & -n;
}

int main()
{
    std::cout << solution(10);
}