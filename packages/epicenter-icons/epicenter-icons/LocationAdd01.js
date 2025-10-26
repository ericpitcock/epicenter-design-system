import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 11L12 11M12 11L8.5 11M12 11L12 14.5M12 11L12 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 11C21 18 12 22 12 22C12 22 3 18 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LocationAdd01',
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
