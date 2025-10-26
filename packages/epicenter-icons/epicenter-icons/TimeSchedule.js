import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.0261 21.948C12.6888 21.9824 12.3464 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 8V12L13.5 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21.9504 18.407C22.0165 18.4457 22.0166 18.5423 21.9505 18.5811L16.1493 21.9861C16.0707 22.0322 15.9774 21.9562 16.0049 21.8686L17.0661 18.494L16.005 15.1315C15.9774 15.044 16.0706 14.9679 16.1492 15.0138L21.9504 18.407Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TimeSchedule',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
