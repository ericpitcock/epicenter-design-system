import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 7C15.5 9.20914 13.7091 11 11.5 11C9.29086 11 7.5 9.20914 7.5 7C7.5 4.79086 9.29086 3 11.5 3C13.7091 3 15.5 4.79086 15.5 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 6V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19.5 13V13.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18.5 19C18.5 16.2386 16.2614 14 13.5 14H9.5C6.73858 14 4.5 16.2386 4.5 19V20C4.5 20.5523 4.94772 21 5.5 21H17.5C18.0523 21 18.5 20.5523 18.5 20V19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserWarning03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
