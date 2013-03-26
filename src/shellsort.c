#include <stdio.h>

void shellsort(int v[], int n);

int main(int argc, const char *argv[])
{
  int v[] = {2,6,4,3,5,7,8,9,1};
  int n = 9;
  shellsort(v, 9);
  int i;
  for (i = 0; i < 9; i++) {
    printf("%d", v[i]);
  }
  printf("\n");
  return 0;
}

void shellsort(int v[], int n) {
  int gap, i, j, temp;
  for(gap = n/2;gap > 0; gap /= 2) {
    for (i = gap; i < n; i++) {
      for(j=i-gap; j >= 0 && v[j] > v[j+gap]; j -= gap) {
        temp = v[j];
        v[j] = v[j+gap];
        v[j+gap] = temp;
      }
    }
  }
}
