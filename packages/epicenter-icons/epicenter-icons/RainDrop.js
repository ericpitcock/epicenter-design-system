import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 13.5C21 18.1944 17.1944 22 12.5 22C7.80558 22 4 18.1944 4 13.5C4 7.95215 10.1922 3.49703 12.0063 2.31086C12.3101 2.11217 12.6899 2.11217 12.9937 2.31086C14.8078 3.49703 21 7.95215 21 13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RainDrop',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
