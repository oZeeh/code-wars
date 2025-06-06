def get_sum(a,b):
    if a < b:
       x = list(range(a, b+1))
    else:
      x = list(range(b, a+1))

    return sum(x)

def main():
    print(get_sum(1, 2))

main()
