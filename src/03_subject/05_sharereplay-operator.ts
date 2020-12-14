/*
shareReplay operator

  - cast unicast obs$ to multicast obs$
  - replays latest values to new subscribers

(makes use of a ReplaySubject)

you can also limit the time available to replay the latest value(s)

*/