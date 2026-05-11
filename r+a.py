n=int(input())
while str(n)!=str(n)[::-1]:
    r=str(n)[::-1]
    print(n,'+',r,'=',n+int(r))
    n+=int(r)