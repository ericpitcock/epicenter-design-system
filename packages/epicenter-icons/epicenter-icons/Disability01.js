import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 18H18.0662C17.7149 18 17.3894 17.8157 17.2087 17.5145L16.2913 15.9855C16.1106 15.6843 15.7851 15.5 15.4338 15.5H12.5V10.5M12.5 8V10.5M12.5 10.5H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.5 6C11.3954 6 10.5 5.10457 10.5 4C10.5 2.89543 11.3954 2 12.5 2C13.6046 2 14.5 2.89543 14.5 4C14.5 5.10457 13.6046 6 12.5 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.55796 10C6.68735 10.4794 4.5 12.9645 4.5 15.9582C4.5 19.295 7.21743 22 10.5696 22C12.6003 22 14.3982 21.0072 15.5 19.4826', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Disability01',
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
