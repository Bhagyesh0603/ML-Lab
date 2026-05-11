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