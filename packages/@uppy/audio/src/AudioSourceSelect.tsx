import { h } from 'preact'

export interface AudioSourceSelectProps {
  currentDeviceId: string
  audioSources: MediaDeviceInfo[]
  onChangeSource: (value: string) => void
}

export default ({
  currentDeviceId,
  audioSources,
  onChangeSource,
}: AudioSourceSelectProps): JSX.Element => {
  return (
    <div className="uppy-Audio-videoSource">
      <select
        className="uppy-u-reset uppy-Audio-audioSource-select"
        onChange={(event) => {
          onChangeSource(event.target.value)
        }}
      >
        {audioSources.map((audioSource) => (
          <option
            key={audioSource.deviceId}
            value={audioSource.deviceId}
            selected={audioSource.deviceId === currentDeviceId}
          >
            {audioSource.label}
          </option>
        ))}
      </select>
    </div>
  )
}
