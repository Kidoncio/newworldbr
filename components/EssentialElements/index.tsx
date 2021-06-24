import { FC } from 'react'
import { EssentialElements, Strong } from './EssentialElements'

export const EssentialElement: FC = () => {
  return (
    <EssentialElements className="flex flex-col">
      <Strong>elementos essenciais</Strong>

      <div className="flex w-full">
        <div className="flex flex-col" style={{ marginRight: '1rem' }}>
          <span>gear score</span>
          <div>__</div>
          <span>237</span>
        </div>

        <div className="flex flex-col" style={{ width: '70%' }}>
          <div
            className="flex w-full"
            style={{ justifyContent: 'space-between', marginBottom: '0.8rem' }}
          >
            <div className="flex flex-col">
              <span>str</span>

              <div>---</div>

              <span>85</span>
            </div>

            <div>
              <span>dex</span>

              <div>--</div>

              <span>37</span>
            </div>

            <div>
              <span>int</span>

              <div>--</div>

              <span>32</span>
            </div>

            <div>
              <span>foc</span>

              <div>--</div>

              <span>0</span>
            </div>

            <div>
              <span>con</span>

              <div>--</div>

              <span>74</span>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div
              className="flex"
              style={{ justifyContent: 'space-between', marginBottom: '0.5rem' }}
            >
              <span>Saúde</span>
              <span>3245</span>
            </div>

            <div
              className="flex"
              style={{ justifyContent: 'space-between', marginBottom: '0.5rem' }}
            >
              <span>Regeneração de Mana</span>
              <span>100%</span>
            </div>

            <div
              className="flex"
              style={{ justifyContent: 'space-between', marginBottom: '0.5rem' }}
            >
              <span>Redução de Tempo de Recarga</span>
              <span>0%</span>
            </div>
          </div>
        </div>
      </div>
    </EssentialElements>
  )
}
