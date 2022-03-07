import Parcel from "@parcel/core"

const bundler = new Parcel({ /* ... */ })

bundler.watch((err, buildEvent) => {
  if (buildEvent.type === "buildSuccess") { /* ... */ }
  if (buildEvent.type === "buildFailure") { /* ... */ }
})

