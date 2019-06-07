import pageMapTraverser from '../../src/pageMapTraverser'

describe('pageMapTraverser test suite', () => {
  const mockPageMapper = {
    v2: {
      _: [{ title: 'static', path: '/docs/v2/static.md' }],
    },
    v1: {
      train: {
        _: [{ title: 'static-train', path: '/docs/v1/train/static-train.md' }],
      },
      _: [{ title: 'experiment-v1', path: '/docs/v1/experiment-v1.md' }],
      airplane: { _: [{ title: 'static-airplane', path: '/docs/v1/airplane/static-airplane.md' }] },
    },
    _: [{ title: 'experiment2', path: '/docs/experiment2.md' }, { title: 'experiment', path: '/docs/experiment.md' }],
  }

  it('expect result', async () => {
    const result = []
    const expectedTitle = [
      { title: 'static', path: '/docs/v2/static.md', deepLevel: 1 },
      {
        title: 'static-train',
        path: '/docs/v1/train/static-train.md',
        deepLevel: 2,
      },
      {
        title: 'experiment-v1',
        path: '/docs/v1/experiment-v1.md',
        deepLevel: 1,
      },
      {
        title: 'static-airplane',
        path: '/docs/v1/airplane/static-airplane.md',
        deepLevel: 2,
      },
      {
        title: 'experiment2',
        path: '/docs/experiment2.md',
        deepLevel: 0,
      },
      {
        title: 'experiment',
        path: '/docs/experiment.md',
        deepLevel: 0,
      }]
    await pageMapTraverser(mockPageMapper, (title, path, deepLevel) => {
      result.push({
        title,
        path,
        deepLevel,
      })
    })
    expect(result).toStrictEqual(expectedTitle)
  })
})
