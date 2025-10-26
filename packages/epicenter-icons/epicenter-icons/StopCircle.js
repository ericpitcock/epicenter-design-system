import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })
const _hoisted2 = h('path', { 'd': 'M14 8.5H10C9.17157 8.5 8.5 9.17157 8.5 10V14C8.5 14.8284 9.17157 15.5 10 15.5H14C14.8284 15.5 15.5 14.8284 15.5 14V10C15.5 9.17157 14.8284 8.5 14 8.5Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'StopCircle',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
