declare namespace Carnap {
  import { SequentNode } from './Sequent'

  const checkIchikawaJenkinsSLTableau: (
    sequent: SequentNode,
    callback: (feedback: FeedbackNode) => any
  ) => void
}