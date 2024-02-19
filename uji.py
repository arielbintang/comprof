x = int(input(""))
data = []

for i in range(1,10):
  if(x/i % 2 == 0):
    data.append(i)
    print (len(data))