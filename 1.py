s=input().lower()
alpha='abcdefghijklmnopqrstuvwxyz'
for i in alpha :
    if i not in s :
        print('no p')
        break
else :
    print('ys p')