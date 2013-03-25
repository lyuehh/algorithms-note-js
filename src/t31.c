#include <stdio.h>
#include <time.h>

int binsearch(int x, int v[], int n);
int binsearch2(int x, int v[], int n);

#define MAX_ELEMENT 20000

int main(void) {
  int testdata[MAX_ELEMENT];
  int index; /* Index of found element in test data */
  int n = -1; /* Element to search for */
  int i;
  clock_t time_taken;
  for ( i = 0; i < MAX_ELEMENT; ++i )
    testdata[i] = i;

  for ( i = 0, time_taken = clock(); i < 100000; ++i ) {
    index = binsearch(n, testdata, MAX_ELEMENT);
  }

  time_taken = clock() - time_taken;

  printf("binsearch() took %lu clocks (%lu seconds)\n", (unsigned long) time_taken,
        (unsigned long) time_taken / CLOCKS_PER_SEC); 

  for ( i = 0, time_taken = clock(); i < 100000; ++i ) {
    index = binsearch2(n, testdata, MAX_ELEMENT);
  }

  time_taken = clock() - time_taken;

  printf("binsearch2() took %lu clocks (%lu seconds)\n", (unsigned long) time_taken,
      (unsigned long) time_taken / CLOCKS_PER_SEC); return 0;
}

int binsearch(int x, int v[], int n) {
  int low, mid, high;
  low = 0;
  high = n - 1;
  while ( low <= high ) {
    mid = (low+high) / 2;
    if ( x < v[mid] )
      high = mid - 1;
    else if ( x > v[mid] )
      low = mid + 1;
    else
      return mid;
  }
  return -1;
}

int binsearch2(int x, int v[], int n) {
  int low, high, mid;
  low = 0;
  high = n - 1;
  mid = (low+high) / 2;
  while ( low <= high && x != v[mid] ) {
    if ( x < v[mid] )
      high = mid - 1;
    else
      low = mid + 1;
    mid = (low+high) / 2;
  }
  if ( x == v[mid] )
    return mid;
  else
    return -1;
}
