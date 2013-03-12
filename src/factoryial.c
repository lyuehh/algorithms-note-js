#include <stdio.h>

int factoryial(int n) {
  int result = 1;
  printf("R: %d", result);
  int i;
  for(i=1;i<=n;i++) {
    result = result * i;
    printf("%d", result);
    printf("%d", i);
  }
  return result;
}
int main(void) {
  printf("%d", factoryial(100));
}

