import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 2V6M8.5 6V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 11.3696V7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V11.3696C18 11.7799 17.8738 12.1803 17.6385 12.5165L15.0972 16.1469C14.7229 16.6816 14.1113 17 13.4587 17H10.5413C9.88868 17 9.2771 16.6816 8.90285 16.1469L6.36154 12.5165C6.12622 12.1803 6 11.7799 6 11.3696Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 17V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 9H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Plug01',
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
