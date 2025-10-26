import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 17.5L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z' })
const _hoisted3 = h('path', { 'd': 'M8.5 8H9.5M12 11H9.5M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8H11M12 11C12.8284 11 13.5 11.6716 13.5 12.5C13.5 13.3284 12.8284 14 12 14H11M9.5 11V8M9.5 11V14M8.5 14H9.5M9.5 8H11M9.5 14H11M11 8V7M11 14V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinSearch',
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
