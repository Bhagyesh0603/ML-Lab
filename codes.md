# 1.py
```python
s=input().lower()
alpha='abcdefghijklmnopqrstuvwxyz'
for i in alpha :
    if i not in s :
        print('no p')
        break
else :
    print('ys p')
```

# 2.py
```python
n=int(input())
while (True) :
    if n == 1 :
        break
    elif n%2==0 :
        n=n//2
    else :
        n=3*n+1
    print(n)
```

# mansa.py
```python
from math import factorial
n,r=map(int,input().split())
print(factorial(n)//(factorial(r)*factorial(n-r)))
```

# maxdraw.py
```python
for _ in range(int(input())):
    n=int(input())
    print(n+1)
```

# median.py
```python
n=int(input())
a=list(map(int,input().split()))
a.sort()
print('median is :',a[n//2])
```

# queue.py
```python
s1=[]
s2=[]

while True:

    print("1.Enqueue")
    print("2.Dequeue")
    print("3.Display")
    print("4.Exit")

    c=int(input("Enter choice: "))

    if c==1:
        n=input("Enter number: ")
        s1.append(n)

    elif c==2:

        if not s2:
            while s1:
                s2.append(s1.pop())

        if s2:
            print("Dequeued:",s2.pop())
        else:
            print("Queue is empty")

    elif c==3:

        q=s2[::-1]+s1
        print("Queue:",q)

    elif c==4:
        break

    else:
        print("Invalid choice")
```

# r+a.py
```python
n=int(input())
while str(n)!=str(n)[::-1]:
    r=str(n)[::-1]
    print(n,'+',r,'=',n+int(r))
    n+=int(r)
```
A