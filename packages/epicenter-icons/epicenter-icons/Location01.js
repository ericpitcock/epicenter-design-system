import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z' })
const _hoisted2 = h('path', { 'd': 'M21 11C21 18 12 22 12 22C12 22 3 18 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Location01',
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
