"use client"

import { Component } from "react"
import { IconAlertTriangle, IconRefresh } from "@tabler/icons-react"
import styles from "./UploaderWidget.module.scss"

class UploaderErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("UploaderWidget error:", error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.widget}>
          <div className={styles.errorBoundary}>
            <IconAlertTriangle size={32} />
            <h3>Something went wrong</h3>
            <p>The uploader encountered an error. Please try again.</p>
            <button onClick={this.handleRetry}>
              <IconRefresh size={16} />
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default UploaderErrorBoundary
